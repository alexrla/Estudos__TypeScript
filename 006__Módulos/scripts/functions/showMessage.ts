//   Só podemos ter um export default por arquivo

export default function showMessage(message: string | number | object): boolean   {
    console.log(message);

    return true;
}
