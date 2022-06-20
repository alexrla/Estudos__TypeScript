import Notifications from "./Notifications";
import IMyUser from "../interfaces/IMyUser";

export default class Email extends Notifications {
    send(user: IMyUser): boolean {
        console.log(`Enviando email para ${user.email}...`);
        return true;
    }
}