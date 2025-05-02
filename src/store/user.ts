import { Store } from "@tanstack/react-store";

interface AffiliateLink {
  id: string;
  name:string,
  phone: string;
  createdAt: string;
}

interface State {
  affiliateLink: AffiliateLink | null;
  message: string;
}

// กำหนดค่าเริ่มต้นของ Store
export const store: Store<State> = new Store<State>({
  affiliateLink: null, // ต้องกำหนดให้เป็น null ตรงกับ Type
  message: "",
});


export const updateAffiliateLink = (newAffiliateLink: AffiliateLink) => {
    store.setState((prevState) => ({
        ...prevState,
        affiliateLink: newAffiliateLink,
    }));
};

export const updateMessage = (newMessage: string) => {
    store.setState((prevState) => ({
        ...prevState,
        message: newMessage,
    }));
};
