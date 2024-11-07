type Circle = {
    shape: "circle",
    radius: number
};

type Rectangle = {
    shape: "rectangle",
    width: number,
    height: number
};

type ShapeMustBe = Circle | Rectangle;

function calculateShapeArea(obj: ShapeMustBe): number {
    if (obj.shape === "circle") {
        return Math.PI * (obj.radius * obj.radius);
    };
    return obj.width * obj.height;
};