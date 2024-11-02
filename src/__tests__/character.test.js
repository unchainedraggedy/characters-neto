import Character, {Bowman} from '../index';

test('создаём мечника черех new character', () => {
  const character = new Character('Robin', 'Swordsman');
  expect(character.name).toBe('Robin');
  expect(character.type).toBe('Swordsman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});

test('слишком короткое имя', () => {
  expect(() => new Character('A', 'Swordsman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
});

test('неправильный тип персонажа', () => {
  expect(() => new Character('Hero', 'Knight')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});


test('создаём лучника', () => {
  const bowman = new Bowman('Robin');
  
  expect(bowman.name).toBe('Robin');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(10);
});

test('тест на слишком короткое имя', () => {
  expect(() => new Bowman('A')).toThrow('Имя должно быть длиной от 2 до 10 символов');
});

