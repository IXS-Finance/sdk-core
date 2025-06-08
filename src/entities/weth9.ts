import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [1]: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH9', 'Wrapped Ether'),
  [3]: new Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH9', 'Wrapped Ether'),
  [4]: new Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH9', 'Wrapped Ether'),
  [5]: new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH9', 'Wrapped Ether'),
  [42]: new Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH9', 'Wrapped Ether'),
  [137]: new Token(137, '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', 18, 'WETH9', 'Wrapped Ether'),
  [80001]: new Token(80001, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WETH9', 'Wrapped Ether'),
  [80002]: new Token(80002, '0x0ae690AAD8663aaB12a671A6A0d74242332de85f', 18, 'WETH9', 'Wrapped Ether'),
  [84532]: new Token(84532, '0x4a2b0767ACEE85C7825F09F48A9347285F58a5C2', 18, 'WETH9', 'Wrapped Ether'),
  [8453]: new Token(8453, '0x4200000000000000000000000000000000000006', 18, 'WETH9', 'Wrapped Ether'),
  [7849306]: new Token(7849306, '0x4200000000000000000000000000000000000006', 18, 'WUSDX', 'Wrapped USDX'),
  [8217]: new Token(8217, '0x19aac5f612f524b754ca7e7c41cbfa2e981a4432', 18, 'WKAIA', 'Wrapped Kaia(WKAIA)'),
  [1001]: new Token(1001, '0x0511632b7280bd4c223ed0e4d86bf04fda5c7799', 18, 'WKAIA', 'Wrapped Kaia(WKAIA)'),
  [153]: new Token(153, '0x4110775464e976A23F8A1Cc351219d7C40D27396', 18, 'wRBNT', 'Wrapped RBNT(wRBNT)'),
  [151]: new Token(151, '0x0Fa205c0446cD9EeDCc7538c9E24BC55AD08207f', 18, 'wRBNT', 'Wrapped RBNT(wRBNT)')
}
