import Triangle from './../src/triangle.js';


describe('Triangle', () => {

    test('Test #1 - Should correctly create a triangle object with three lengths', () => {
        const triangle = new Triangle(2, 4, 5);
        expect(triangle.side1).toEqual(2);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).toEqual(5);
    });

    test('Test #2 - Should correctly determine whether three lengths are not a triangle', () => {
        const notTriangle = new Triangle(3, 9, 22);
        expect(notTriangle.checkType()).toEqual("not a triangle");
    });

    test('Test #3 - Should correctly determine whether three lengths make a scalene triangle', () => {
        const scalTriangle = new Triangle(4, 5, 7);
        expect(scalTriangle.checkType()).toEqual("scalene triangle");
    });

    test('Test #4 - Should correctly determine whether three lengths make an isosceles triangle', () => {
        const isoscTriangle = new Triangle(5, 5, 7);
        expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
    });

    test('Test #5 - Should correctly determine whether three lengths make an equilateral triangle', () => {
        const equiTriangle = new Triangle(5, 5, 5);
        expect(equiTriangle.checkType()).toEqual("equilateral triangle");
    });
});