const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
    const manager = new Manager("Sally", 10, "sally@mail.com", 303);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email).toContain("@");
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name from function", () => {
    const manager = new Manager("Sally", 10, "sally@mail.com", 303);

    expect(manager.getName()).toBe("Sally");
});

test("gets manager's id from function", () => {
    const manager = new Manager("Sally", 10, "sally@mail.com", 303);

    expect(manager.getId()).toBe(10);
});

test("gets manager's email from function", () => {
    const manager = new Manager("Sally", 10, "sally@mail.com", 303);

    expect(manager.getEmail()).toBe("sally@mail.com");
    expect(manager.getEmail()).toContain("@");
});

test("running getRole returns 'Manager'", () => {
    const manager = new Manager("Sally", 10, "sally@mail.com", 303);

    expect(manager.getRole()).toBe("Manager");
});