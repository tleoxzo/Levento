export function formatBaht(value: number): string {
    const baht = Math.floor(value * 100) / 100;
    return baht.toFixed(2); // แสดงทศนิยม 2 ตำแหน่งเสมอ
}