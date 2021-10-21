const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
    const engineer = new Engineer("Harry", 2, "harry@mail.com", "harrygithub");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email).toContain("@");
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name from function", () => {
    const engineer = new Engineer("Harry", 2, "harry@mail.com", "harrygithub");

    expect(engineer.getName()).toBe("Harry");
});

test("gets engineer's id from function", () => {
    const engineer = new Engineer("Harry", 2, "harry@mail.com", "harrygithub");

    expect(engineer.getId()).toBe(2);
});

test("gets engineer's email from function", () => {
    const engineer = new Engineer("Harry", 2, "harry@mail.com", "harrygithub");

    expect(engineer.getEmail()).toBe("harry@mail.com");
    expect(engineer.getEmail()).toContain("@");
});

test("gets engineer's github from function", () => {
    const engineer = new Engineer("Harry", 2, "harry@mail.com", "harrygithub");

    expect(engineer.getGithub()).toBe("harrygithub");
});

test("running getRole returns 'Engineer'", () => {
    const engineer = new Engineer("Harry", 2, "harry@mail.com", "harrygithub");

    expect(engineer.getRole()).toBe("Engineer");
});