import { checkForURL } from "../src/client/js/urlChecker";

test('Whether the function is defined or not', () => {
    expect(checkForURL).toBeDefined();
  });

test('checkForURl functionality', () => {
    expect(checkForURL("not url")).toBeFalsy();
});

test('checkForURl functionality', () => {
    expect(checkForURL("https://medium.com/")).toBeTruthy();
});