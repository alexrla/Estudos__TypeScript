class Company   {
    provideService()    {
        return "Empresa prestando serviço";
    }
}

class Bakery extends Company   {
    provideService()    {
        return "Vendendo pães";
    }
}

class GroceryStore extends Company   {
    provideService()    {
        return "Vendendo alimentos e bebidas";
    }
}

console.log(new Company().provideService());
console.log(new Bakery().provideService());
console.log(new GroceryStore().provideService());