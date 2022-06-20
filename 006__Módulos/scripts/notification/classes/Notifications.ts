import IMyUser from "../interfaces/IMyUser";

export default abstract class Notifications  {
    // Um método abstrato, não pode ser implementado
    abstract send(user: IMyUser): boolean;
}