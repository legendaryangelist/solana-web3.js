import { Address } from '@solana/addresses';
import { ReadonlyUint8Array } from '@solana/codecs-core';
import { SignatureBytes } from '@solana/keys';

export type TransactionMessageBytes = ReadonlyUint8Array & { readonly __brand: unique symbol };
export type OrderedMap<K extends string, V> = Record<K, V>;
export type SignaturesMap = OrderedMap<Address, SignatureBytes | null>;

export type NewTransaction = Readonly<{
    messageBytes: TransactionMessageBytes;
    signatures: SignaturesMap;
}>;
