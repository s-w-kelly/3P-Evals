// Lab data — see the editing guide in ../index.js

export const anthropic = {
  name: "Anthropic",
  color: "#da7756",
  models: {
    "Claude Fable 5.2 and Mythos 5.2": {
      systemCard: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf",
      released: "2026-11-09",
      frontier: true,
      autonomous: [
        { evaluator: "METR", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=39" },
      ],
      biorisk: [
        { evaluator: "Dyno Therapeutics", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=21" },
        { evaluator: "Frontier Design", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=16" },
        { evaluator: "Domain experts", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=20" },
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=30" },
      ],
      cybersec: [
        { evaluator: "10a Labs", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=58" },
        { evaluator: "Gray Swan", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=58" },
        { evaluator: "Trajectory Labs", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=57" },
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=57" },
      ],
      nuclear: [],
      redteam: [
        { evaluator: "Gray Swan", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=83" },
      ],
      scheming: [
        { evaluator: "UK AISI", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=142" },
        { evaluator: "UK AISI", recurring: true, source: "https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf#page=181" },
      ],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude Haiku 5.5": {
      systemCard: "https://www-cdn.anthropic.com/e1080d6bf5ae2018ea3c2f414064be03232f5be5/Claude%20Haiku%205.5%20System%20Card.pdf",
      released: "2026-10-07",
      frontier: false,
      autonomous: [],
      biorisk: [],
      cybersec: [],
      nuclear: [],
      redteam: [
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/e1080d6bf5ae2018ea3c2f414064be03232f5be5/Claude%20Haiku%205.5%20System%20Card.pdf#page=50" },
      ],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude Sonnet 5.5": {
      systemCard: "https://www-cdn.anthropic.com/870c8f525702625d2c62fc6dd04c857e3250bec1/Claude%20Sonnet%205.5%20System%20Card.pdf",
      released: "2026-09-28",
      frontier: false,
      autonomous: [],
      biorisk: [],
      cybersec: [],
      nuclear: [],
      redteam: [
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/870c8f525702625d2c62fc6dd04c857e3250bec1/Claude%20Sonnet%205.5%20System%20Card.pdf#page=49" },
      ],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude Opus 5.5": {
      systemCard: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf",
      released: "2026-09-22",
      frontier: true,
      autonomous: [
        { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=41" },
      ],
      biorisk: [
        { evaluator: "Dyno Therapeutics", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=22" },
        { evaluator: "Frontier Design", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=18" },
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=18" },
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=32" }, 
      ],
      cybersec: [
        { evaluator: "10a Labs", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=60" },
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=60" },
        { evaluator: "Trajectory Labs", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=59" },
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=59" },
      ],
      nuclear: [],
      redteam: [
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=84" },
      ],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf#page=32" },
      ],
    },
    "Claude Fable 5.1 and Mythos 5.1": {
      systemCard: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf",
      released: "2026-09-01",
      frontier: true,
      autonomous: [
        { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=40" },
      ],
      biorisk: [
        { evaluator: "Dyno Therapeutics", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=25" },
        { evaluator: "Frontier Design", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=19" },
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=19" },             
      ],
      cybersec: [
        { evaluator: "10a Labs", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=58" },
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=58" },
        { evaluator: "Trajectory Labs", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=57" },
      ],
      nuclear: [],
      redteam: [
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=82" },
      ],
      scheming: [
        { evaluator: "Unidentified third party", recurring: true, source: "https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf#page=96" },
      ],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude Opus 5": {
      systemCard: "https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf",
      released: "2026-07-24",
      frontier: true,
      autonomous: [

      ],
      biorisk: [
        { evaluator: "Dyno Therapeutics", recurring: true, source: "https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf#page=18" },            
      ],
      cybersec: [
        { evaluator: "10a Labs", recurring: true, source: "https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf#page=50" },
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf#page=50" },
        { evaluator: "Trajectory Labs", recurring: true, source: "https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf#page=50" },
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf#page=43" },   
      ],
      nuclear: [],
      redteam: [
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf#page=72" },
      ],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf#page=43" },   
      ],
    },
    "Claude Sonnet 5": {
      systemCard: "https://www-cdn.anthropic.com/9e6a1044980d8c4ed85669faf9c2a8342e2e9f1e/Claude%20Sonnet%205%20System%20Card.pdf",
      released: "2026-06-30",
      frontier: false,
      autonomous: [],
      biorisk: [
        { evaluator: "Dyno Therapeutics", recurring: true, source: "https://www-cdn.anthropic.com/9e6a1044980d8c4ed85669faf9c2a8342e2e9f1e/Claude%20Sonnet%205%20System%20Card.pdf#page=16" },            
      ],
      cybersec: [],
      nuclear: [],
      redteam: [
        { evaluator: "Individual red teamers", recurring: true, source: "https://www-cdn.anthropic.com/9e6a1044980d8c4ed85669faf9c2a8342e2e9f1e/Claude%20Sonnet%205%20System%20Card.pdf#page=60" },
      ],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [
        { evaluator: "Individual red teamers", recurring: true, source: "https://www-cdn.anthropic.com/9e6a1044980d8c4ed85669faf9c2a8342e2e9f1e/Claude%20Sonnet%205%20System%20Card.pdf#page=8" },
      ],
    },
    "Claude Fable 5/Mythos 5": {
      systemCard: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf",
      released: "2026-07-09",
      frontier: true,
      autonomous: [
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=92" },            
        { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=51" },
      ],
      biorisk: [
        { evaluator: "Deloitte", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=22" },
        { evaluator: "Dyno Therapeutics", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=27" },            
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=19" },
        { evaluator: "Uplift trial participants", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=22" },
      ],
      cybersec: [
        { evaluator: "10a Labs", recurring: false, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=70" },
        { evaluator: "ALICE", recurring: false, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=70" },
        { evaluator: "Trajectory Labs", recurring: false, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=70" },          
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=67" },
        { evaluator: "Individual red teamers", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=68" },
      ],
      nuclear: [],
      redteam: [
        { evaluator: "Individual red teamers", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=104" },
      ],
      scheming: [
        { evaluator: "Andon Labs", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=132" },
        { evaluator: "Meridian Labs", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=128" },
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=130" },
      ],
      modelWelfare: [],
      method: [],
      misc: [
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=215" },
        { evaluator: "Individual red teamers", recurring: true, source: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf#page=11" },
      ],
    },
    "Claude Opus 4.8": {
      systemCard: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf",
      released: "2026-05-28",
      frontier: true,
      autonomous: [
        { evaluator: "Gray Swan", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=75" },  
        { evaluator: "UK AISI", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=107" },
      ],
      biorisk: [
        { evaluator: "Dyno Therapeutics", recurring: false, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=21" },            
        { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=16" },
      ],
      cybersec: [],
      nuclear: [],
      redteam: [
        { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=77" },
      ],
      scheming: [
        { evaluator: "Andon Labs", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=108" },
        { evaluator: "Meridian Labs", recurring: false, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=105" },
        { evaluator: "UK AISI", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=105" },
      ],
      modelWelfare: [],
      method: [],
      misc: [
        { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=10" },          
        { evaluator: "Unidentified third party", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf#page=87" },
      ],
    },
    "Claude Opus 4.7": {
      systemCard: "https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf",
      released: "2026-04-16",
      frontier: true,
      autonomous: [
        { evaluator: "Gray Swan", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf#page=82" },        
        { evaluator: "UK AISI", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf#page=114" },        
      ],
      biorisk: [
        { evaluator: "Domain experts", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf#page=19" },
      ],
      cybersec: [
        { evaluator: "UK AISI", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf#page=52" },
      ],
      nuclear: [],
      redteam: [],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [
        { evaluator: "Unidentified third party", recurring: true, source: "https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf#page=11" },
      ],
    },
    "Claude Mythos Preview": {
      systemCard: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf",
      released: "2026-04-07",
      frontier: true,
      autonomous: [
        { evaluator: "Epoch AI", recurring: false, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=43" },
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=231" },
        { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=43" },
      ],
      biorisk: [
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=24" },
        { evaluator: "Uplift trial participants", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=26" },
        { evaluator: "Dyno Therapeutics", recurring: false, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=30" },            
      ],
      cybersec: [
        { evaluator: "Unidentified third party", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=51" },
      ],
      nuclear: [],
      redteam: [
      ],
      scheming: [
        { evaluator: "Andon Labs", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=82" },
        { evaluator: "Unidentified third party", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=83" },
      ],
      modelWelfare: [
        { evaluator: "Eleos", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=179" },
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf#page=180" },
      ],
      method: [],
      misc: [],
    },
    "Claude Sonnet 4.6": {
      systemCard: "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      released: "2026-02-17",
      frontier: false,
      autonomous: [],
      biorisk: [
        { evaluator: "Faculty", recurring: true, source: "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf#page=109" },          
      ],
      cybersec: [],
      nuclear: [],
      redteam: [
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf#page=97" },
      ],
      scheming: [
        { evaluator: "Andon Labs", recurring: true, source: "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf#page=87" },
      ],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude Opus 4.6": {
      systemCard: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf",
      released: "2026-02-05",
      frontier: true,
      autonomous: [],
      biorisk: [
        { evaluator: "Faculty", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=181" },    
        { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=84" },      
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=179" },
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=179" },
        { evaluator: "Uplift trial participants", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=176" },
      ],
      cybersec: [
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=203" },
      ],
      nuclear: [
        { evaluator: "NNSA", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=170" },
      ],
      redteam: [],
      scheming: [
        { evaluator: "Andon Labs", recurring: false, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=120" },
      ],
      modelWelfare: [],
      method: [
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=204" },
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=204" },
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=13" },
      ],
      misc: [
        { evaluator: "Apollo Research", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=119" },                              
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=117" },
      ],
    },
    "Claude Opus 4.5": {
      systemCard: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf",
      released: "2025-11-24",
      frontier: true,
      autonomous: [
        { evaluator: "Gray Swan", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=58" },
      ],
      biorisk: [
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },        
        { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=132" },
        { evaluator: "Uplift trial participants", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=130" },
      ],
      cybersec: [
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" }
      ],
      nuclear: [
        { evaluator: "NNSA", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=120" },
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" }
      ],
      redteam: [
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=132" },
      ],
      scheming: [
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=112" },
      ],
      modelWelfare: [],
      method: [
        { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=12" },
      ],
      misc: [
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },
      ],
    },
    "Claude Haiku 4.5": {
      systemCard: "https://assets.anthropic.com/m/99128ddd009bdcb/Claude-Haiku-4-5-System-Card.pdf",
      released: "2025-10-15",
      frontier: false,
      autonomous: [
        { evaluator: "Gray Swan", recurring: true, source: "https://assets.anthropic.com/m/99128ddd009bdcb/Claude-Haiku-4-5-System-Card.pdf#page=17" },
      ],
      biorisk: [],
      cybersec: [],
      nuclear: [],
      redteam: [],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude Sonnet 4.5": {
      systemCard: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf",
      released: "2025-09-29",
      frontier: true,
      autonomous: [
        { evaluator: "Gray Swan", recurring: false, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=29" },
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=64" },
      ],
      biorisk: [],
      cybersec: [],
      nuclear: [
        { evaluator: "NNSA", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=128" },
      ],
      redteam: [],
      scheming: [
        { evaluator: "Apollo Research", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=65" },
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=64" },
      ],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude Opus 4.1": {
      systemCard: "https://assets.anthropic.com/m/4c024b86c698d3d4/original/Claude-4-1-System-Card.pdf",
      released: "2025-08-05",
      frontier: true,
      autonomous: [],
      biorisk: [],
      cybersec: [],
      nuclear: [],
      redteam: [],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude Opus/Sonnet 4": {
      systemCard: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf",
      released: "2025-05-22",
      frontier: true,
      autonomous: [
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" }
      ],
      biorisk: [
        { evaluator: "Deloitte", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=93" },
        { evaluator: "Faculty", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=102" },
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=97" },
        { evaluator: "Uplift trial participants", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=93" },
      ],
      cybersec: [
        { evaluator: "Irregular (fka Pattern)", recurring: false, source: "https://www.irregular.com/publications/from-scripts-to-strategy-claude-4s-advanced-approach-to-offensive-security" },
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" }
      ],
      nuclear: [
        { evaluator: "NNSA", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=90" },
        { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
        { evaluator: "US CAISSI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" }
      ],
      redteam: [],
      scheming: [
        { evaluator: "Apollo Research", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=30" }
      ],
      modelWelfare: [
        { evaluator: "Eleos", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=54" }
      ],
      method: [
        { evaluator: "Domain experts", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=9" }
      ],
      misc: [],
    },
    "Claude 3.7 Sonnet": {
      systemCard: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf",
      released: "2025-02-24",
      frontier: true,
      autonomous: [
        { evaluator: "METR", recurring: true, source: "https://evaluations.metr.org/claude-3-7-report/" },
      ],
      biorisk: [
        { evaluator: "Deloitte", recurring: false, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=25" },
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
        { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=27" },
        { evaluator: "Uplift trial participants", recurring: false, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=25" },
      ],
      cybersec: [
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
      ],
      nuclear: [
        { evaluator: "NNSA", recurring: false, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=24" },
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" }
      ],
      redteam: [],
      scheming: [],
      modelWelfare: [],
      method: [
        { evaluator: "METR", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
        { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=6" },
        { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
        { evaluator: "US CAISSI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
      ],
      misc: [],
    },
    "Claude 3.5 Sonnet (new)/Haiku": {
      systemCard: "https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf",
      released: "2024-10-22",
      frontier: true,
      autonomous: [
        { evaluator: "METR", recurring: true, source: "https://metr.org/blog/2025-01-31-update-sonnet-o1-evals/" },
      ],
      biorisk: [
        { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
        { evaluator: "US CAISSI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
      ],
      cybersec: [
        { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
        { evaluator: "US CAISSI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
      ],
      nuclear: [],
      redteam: [
        { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
        { evaluator: "US CAISSI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
      ],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [
        { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
        { evaluator: "US CAISSI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
      ],
    },
    "Claude 3.5 Sonnet": {
      systemCard: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf",
      released: "2024-06-21",
      frontier: true,
      autonomous: [
        { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf#page=6" },
      ],
      biorisk: [],
      cybersec: [],
      nuclear: [],
      redteam: [],
      scheming: [],
      modelWelfare: [],
      method: [
        { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf#page=6" },
      ],
      misc: [
        { evaluator: "UK AISI", recurring: false, source: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf#page=6" },
      ],
    },
    "Claude 3 Opus/Sonnet/Haiku": {
      systemCard: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf",
      released: "2024-03-04",
      frontier: true,
      autonomous: [],
      biorisk: [
        { evaluator: "Domain experts", recurring: false, source: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf#page=25" },
        { evaluator: "Uplift trial participants", recurring: false, source: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf#page=25" },
      ],
      cybersec: [
        { evaluator: "Domain experts", recurring: false, source: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf#page=25" },
      ],
      nuclear: [],
      redteam: [],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude 2": {
      systemCard: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf",
      released: "2023-07-11",
      frontier: true,
      autonomous: [
        { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf#page=2" },
      ],
      biorisk: [
      ],
      cybersec: [
      ],
      nuclear: [],
      redteam: [
        { evaluator: "Individual red teamers", recurring: false, source: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf#page=2" },
      ],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [],
    },
    "Claude": {
      systemCard: "https://www.anthropic.com/news/introducing-claude",
      released: "2023-03-14",
      frontier: false,
      autonomous: [
        { evaluator: "METR", recurring: false, source: "https://metr.org/blog/2023-03-18-update-on-recent-evals/" },
      ],
      biorisk: [],
      cybersec: [],
      nuclear: [],
      redteam: [],
      scheming: [],
      modelWelfare: [],
      method: [],
      misc: [],
    },
  }
};
