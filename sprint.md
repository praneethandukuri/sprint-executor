# SPRINT

---

## INSTRUCIONS

---

### Put

Put instruction put the given number in specified cell number

#### Syntax:

0 [Number] [Cell Number]

· The instruction [0 20 10] at line 1, puts the number 20 in cell number 10

```javascript
1 | 0 20 10
2 | 9
```

---

### Add

Add instruction adds the number present specified cell number and put the result of addition in result cell number

#### Syntax:

1 [lhs cell number] [rhs cell number] [Result cell number]

The instruction [1 101 100 102], adds value present in cell number 101 and 100 and put the result of addition in cell number 102

```javascript
1 | 0 45 100
2 | 0 55 101
3 | 1 101 100 102
4 | 9
```

---

### Subtract

Subtract instruction subtracts the number present specified cell number and put the result of subtraction in result cell number

#### Syntax:

2 [lhs cell number] [rhs cell number] [Result cell number]

The instruction [2 101 100 102] at line 3, subtracts value present in cell number 100 from value present in cell number 101 and put the result of subtraction in cell number 102

```javascript
1 | 0 45 100
2 | 0 55 101
3 | 2 101 100 102
4 | 9
```

---

### Jump

Jumps moves the program counter to the specified cell number

#### Syntax:

3 [cell number]

The instruction [3 13] at line 3 moves the program counter to cell number 13, as a result program execute halt instruction of cell number 13 instead of add instruction of cell number 9

```javascript
1 | 0 45 100
2 | 0 55 101
3 | 3 13
4 | 1 100 101 102
5 | 9
```

---

### JumpIfEqual

JumpsIfEqual moves the program counter to the specified cell number if value in lhs cell is equal to rhs cell

#### Syntax:

4 [lhs cell number] [rhs cell number] [cell number]
The instruction [4 100 101 15] at line 3 moves the program counter to cell number 15, as a result program execute halt instruction of cell number 15 instead of add instruction of line number 4

```javascript
1 | 0 45 100
2 | 0 45 101
3 | 4 100 101 15
4 | 1 100 101 102
5 | 9
```

---

### JumpIfLessThan

JumpIfLessThan moves the program counter to the specified cell number if value in lhs cell is less than that of rhs cell

#### Syntax:

5 [lhs cell number] [rhs cell number] [cell number]

The instruction [5 100 101 15] at line 3 moves the program counter to cell number 15, as a result program execute halt instruction of cell number 15 instead of add instruction of line number 4

```javascript
1 | 0 45 100
2 | 0 55 101
3 | 5 100 101 15
4 | 1 100 101 102
5 | 9
```

---

### Read <Currently disabled>

Read reads the user input and put that input to the specified cell number

#### Syntax:

6 [cell number]
The instruction [6 1] at line 2 reads the user input and put that value in cell number 1

```javascript
1 | 0 45 100
2 | 6 1
3 | 9
```

---

### Copy

Copy copies value of lhs cell to rhs

#### Syntax:

7 [lhs cell number] [rhs cell number]

The instruction [7 100 101] at line 2 copies the value of cell number 100 in cell number 101

```javascript
1
0 45 100
2
7 100 101
3
9
```

---

### Halt

Halt instruction stop the execution of program

#### Syntax:

9

The instruction [9] at line 2, stops the execution of program. Instruction below line 2 won't execute

```javascript
1 | 0 45 100
2 | 9
3 | 0 50 102
4 | 0 55 101
```

===

# EXAMPLE CODES

#### Example 1 :-

##### Input :-

0 23 1 9

##### Output :-

```javascript
┌───────┬───────────────────┬────┬────┬───┬───┐
│ (idx) │ 0                 │ 1  │ 2  │ 3 │ 4 │
├───────┼───────────────────┼────┼────┼───┼───┤
│     0 │ "After executing" │ 23 │ 23 │ 1 │ 9 │
└───────┴───────────────────┴────┴────┴───┴───┘
```
