import { Routes } from "@angular/router";
import { AddPropertyComponent } from "../add-property/add-property.component";

export class Navroutes {
    public static readonly addProperty :string = 'AddProperty';
    
    public static readonly propertyDetail :string = 'PropertyDetail/:id';

    public static readonly freeProperty :string = 'freeProperty';

    public static readonly userRegistration :string = 'register'

}

