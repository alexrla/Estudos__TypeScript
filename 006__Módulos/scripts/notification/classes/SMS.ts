import Notifications from "./Notifications";
import IMyUser from "../interfaces/IMyUser";

export default class SMS extends Notifications {
    send(user: IMyUser): boolean {
        console.log(`Enviando SMS para ${user.phoneNumber}...`);
        return true;
    }
}