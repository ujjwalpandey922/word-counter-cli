# word-counter-cli

A small command-line tool that counts the words in any text file.

## Install

```sh
npm install -g @ujjwalpandey922/word-counter-cli
```

Or run it without installing:

```sh
npx @ujjwalpandey922/word-counter-cli <file>
```

## Usage

```sh
word-counter-cli <file>
```

Example:

```sh
$ word-counter-cli text.txt
Total words: 14
Unique words: 11
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ huloo   │ 1      │
│ hi      │ 1      │
│ how     │ 1      │
│ woh     │ 1      │
│ what    │ 1      │
│ is      │ 1      │
│ the     │ 1      │
│ yo      │ 3      │
│ ho      │ 2      │
│ whats   │ 1      │
│ up      │ 1      │
└─────────┴────────┘
```

- **Total words** is every word in the file.
- **Unique words** is the number of distinct words.
- **Frequency table** shows how many times each word appears.
- Counting is case-insensitive, and punctuation is ignored (`Hello,` and `hello` are the same word).

## Requirements

Node.js 14.8 or later.

## License

ISC
