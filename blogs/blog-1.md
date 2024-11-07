
# The significance of union and intersection types in Typescript.

## Union type :-

In Typescript *union types* allow holding multiple types in a single variable. We declare this using the vertical bar ( | ). This provide us flexibility and type safety.

### *Examples*

```typescript
    let age: string | number;

    age = 19; // valid
    age = "19"; // valid
    age = false; // Error: type "boolean" is not assignable to type "string | number"

```

### *Use case*

We use *union types* when a variable or function aspect or return more then one type value. We can also use type narrowing -

### *Examples*

```typescript
    function(value: string | number) {
        if(typeof value === "string") {
            console.log(`${value}: is string`);
        } else {
            console.log(value ": is number");
        };
    };

```

### *Significance*

- Provide us flexibility
- Type safety
- Narrowing


## Intersection type :-

In Typescript *intersection type* combine multiple types into one. This mix multiple types together to create a new type that have all the properties of the original types.  We declare this using the ampersand ( & ).

### *Examples*

```typescript
    type x = {name: string};
    type y = {age: number};
    type z = x & y;

    const person: z = {
        name: "Shawon Kumar Sarkar",
        age: 19
    }

```

### *Use case*

We use *intersection types* when we need an object to have properties of multiple types -

### *Examples*

```typescript
    type User = {name: string; age: number};
    type Role = {isAdmin: boolean};
    type AdminUser = User & Role;

    const user: AdminUser = {
        name: "Shawon Kumar Sarkar",
        age: 19,
        isAdmin: true
    }

```

### *Significance*

- Provide us reusability
- Enhance type safety
- Improve readability and scalability