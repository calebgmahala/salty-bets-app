import saltyBoy from "./saltyBoyAxiosInstance";
import { mapToFighter, mapToMatch } from "./saltyBoyDataMapper";

export class SaltyBetsService {
  static async getFighter(id: number) {
    const { data } = await saltyBoy.get(`fighter/${id}`);
    return mapToFighter(data);
  }

  static async getMatch(id: number) {
    const { data } = await saltyBoy.get(`match/${id}`);
    return mapToMatch(data);
  }
}
