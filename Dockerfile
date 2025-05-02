# Build Stage
FROM node:lts-alpine AS builder

WORKDIR /app

# ติดตั้ง dependencies ที่จำเป็นสำหรับ node-gyp, canvas และ fontconfig
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    librsvg-dev \
    fontconfig \
    ttf-dejavu \
    ttf-droid \
    ttf-freefont \
    ttf-liberation \
    wget \
    unzip \
    curl

# ติดตั้งฟอนต์ Prompt จาก Google Drive
RUN mkdir -p /usr/share/fonts/truetype/prompt && \
    wget --no-check-certificate "https://github.com/google/fonts/raw/main/ofl/prompt/Prompt-Regular.ttf" -O /usr/share/fonts/truetype/prompt/Prompt-Regular.ttf && \
    wget --no-check-certificate "https://github.com/google/fonts/raw/main/ofl/prompt/Prompt-Bold.ttf" -O /usr/share/fonts/truetype/prompt/Prompt-Bold.ttf && \
    wget --no-check-certificate "https://github.com/google/fonts/raw/main/ofl/prompt/Prompt-Light.ttf" -O /usr/share/fonts/truetype/prompt/Prompt-Light.ttf && \
    fc-cache -f -v

# คัดลอก package.json และ yarn.lock
COPY package.json yarn.lock ./

# ใช้ cached Yarn packages เพื่อลดเวลา build
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install --frozen-lockfile

# คัดลอกโค้ดทั้งหมด
COPY . .

# กำหนดไฟล์ ENV
ARG ENV_FILE=.env.production
ENV ENV_FILE=${ENV_FILE}

COPY ${ENV_FILE} .env

# Generate Prisma Client
RUN npx prisma generate --schema=./src/prisma/schema.prisma

# Build Next.js
RUN yarn build

# Production Stage
FROM node:lts-alpine

WORKDIR /app

# ติดตั้ง runtime dependencies และ fontconfig
RUN apk add --no-cache \
    cairo \
    jpeg \
    pango \
    giflib \
    librsvg \
    fontconfig \
    ttf-dejavu \
    ttf-droid \
    ttf-freefont \
    ttf-liberation \
    wget \
    unzip \
    curl

# ติดตั้งฟอนต์ Prompt ใน production container
RUN mkdir -p /usr/share/fonts/truetype/prompt && \
    wget --no-check-certificate "https://github.com/google/fonts/raw/main/ofl/prompt/Prompt-Regular.ttf" -O /usr/share/fonts/truetype/prompt/Prompt-Regular.ttf && \
    wget --no-check-certificate "https://github.com/google/fonts/raw/main/ofl/prompt/Prompt-Bold.ttf" -O /usr/share/fonts/truetype/prompt/Prompt-Bold.ttf && \
    wget --no-check-certificate "https://github.com/google/fonts/raw/main/ofl/prompt/Prompt-Light.ttf" -O /usr/share/fonts/truetype/prompt/Prompt-Light.ttf && \
    fc-cache -f -v

# คัดลอกโค้ดที่ build แล้วมาจาก builder stage
COPY --from=builder /app ./ 

# เปิดพอร์ตที่แอปจะใช้
EXPOSE 3000

# เริ่มรันแอป
CMD ["yarn", "start"]