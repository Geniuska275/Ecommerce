import { defineField, defineType } from "sanity";

export const productType=defineType({
    name:"product",
    title:"Product",
    type:"document",
    fields:[
     defineField({
        name:"image",
        title:"Image",
        type:"array",
        of:[{type:"image"}],
        options:{
            hotspot:true
        }
      }),
     defineField( {
        name:"name",
        title:"Name",
        type:"string",
      }),
      defineField({
        name:"slug",
        title:"Slug",
        type:"slug",
        options:{
            source:"name",
            maxLength:90
        }
      }),
      defineField({
        name:"price",
        title:"Price",
        type:"number",
    
      }),
      defineField({
        name:"description",
        title:"Description",
        type:"string",
    
      }),
      defineField({
        name:"discount",
        title:"Discount",
        type:"number",
    
      }),
    ]
})