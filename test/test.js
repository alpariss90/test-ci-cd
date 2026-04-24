const {addition, soustraction, multiplication, division} = require("../src/calculatrice")


describe("Gestion d'addition et de soustraction", function(){
    test("test addtion de 2 +5 doit etre 7", function(){
        expect(addition(2, 5)).not.toBe(8);
    })

    test("test addtion de 1000 et 3500 doit etre 4500", function(){
        expect(addition(1000, 3500)).toBe(45
    })


    test("test soustraction de 9 et 4 doit etre 5", function(){
        expect(soustraction(9, 4)).toBe(5);
    })

    test("test soustraction de 5800 et 800 doit etre 5000", function(){
        expect(soustraction(5800, 800)).toBe(5000);
    })
})



describe("gestion de multiplication et division", function(){
    it("multiplication de 50 et 40 doit etre 2000", function(){
        expect(multiplication(50, 40)).toBe(2000)
    })

    it("Division de 900 et 50 doit etre 18", function(){
        expect(division(900, 50)).toBe(18);
    })

    test("test de division par zero", function(){
        expect(function(){division(1,0)}).toThrow("Erreur division");
    })
})