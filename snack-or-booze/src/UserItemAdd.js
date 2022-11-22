// Now that you have more things on your menu, you should add a page that lets site users add either a drink or a snack.

import React, { useState } from "react";
import "./UserItemAdd.css";

function MenuForm({addItem}) {
    const [form, updateForm] = useState({type: "", name: "", description: "", recipe: "", serve: ""});

    function handleChange(e) {
        e.persist();
        // console.log(e.target.id, e.target.value, form)
        updateForm(({ ...form, [e.target.id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addItem(form);
    }

    const {type, name, description, recipe, serve} = form;

    return (
        <div class="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="type">Is this a snack or drink item?</label>
              <input
                type="type"
                id="type"
                placeholder="Snacks or Drinks"
                onChange={handleChange}
                value={form.type}
              />
            </div>    
            <div>
              <label htmlFor="name">What's the name of this item?</label>
              <input
                name="name"
                id="name"
                placeholder="Enter item name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div>
                <label htmlFor="description">Describe it</label>
                <input 
                    description="description"
                    id="description"
                    placeholder="Say what's in it"
                    onChange={handleChange}
                    value={form.description}
                />
            </div>
            <div>
                <label htmlFor="recipe">How do you make it?</label>
                <input
                    recipe="recipe"
                    id="recipe"
                    placeholder="Say what's in it"
                    onChange={handleChange}
                    value={form.recipe}
                />
            </div>
            <div>
                <label htmlFor="serve">How do you serve it?</label>
                <input
                    serve="serve"
                    id="serve"
                    placeholder="Say how you make it"
                    onChange={handleChange}
                    value={form.serve}
                />
            </div>
            <input type="Submit" value="Add this item" readOnly />
          </form>
        </div>
      );
    }
    
    export default MenuForm;


