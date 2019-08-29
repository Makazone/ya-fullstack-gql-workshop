import axios from "axios";

export interface User {
  id: string;
  image: string;
  hasPlus: boolean;
}

interface KpUserResponse {
  id: string;
  image: string;
  hasPlus: boolean;
}

export const getCurrentUser = async (): Promise<User | null> => {
  const response = await axios.get<KpUserResponse>(
    "https://api.ott.kinopoisk.ru/v7/profiles/me",
    {
      headers: {
        Cookie:
          "ya_sess_id=3:1566737578.5.0.1554506461765:o__kJQ:ce.1|40279641.0.2|30:183116.148083.McXhuJ9EflC_ELglPFvV7iIqddA"
      }
    }
  );

  if (response && response.data) {
    const user = response.data;
    return user as User;
  }

  return Promise.resolve(null);
};
