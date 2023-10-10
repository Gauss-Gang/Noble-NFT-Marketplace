import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../common';
export interface MultiAssetProxyInterface extends utils.Interface {
    functions: {
        'assetProxies(bytes4)': FunctionFragment;
        'addAuthorizedAddress(address)': FunctionFragment;
        'authorities(uint256)': FunctionFragment;
        'getAssetProxy(bytes4)': FunctionFragment;
        'removeAuthorizedAddress(address)': FunctionFragment;
        'owner()': FunctionFragment;
        'removeAuthorizedAddressAtIndex(address,uint256)': FunctionFragment;
        'getProxyId()': FunctionFragment;
        'authorized(address)': FunctionFragment;
        'registerAssetProxy(address)': FunctionFragment;
        'getAuthorizedAddresses()': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'assetProxies' | 'addAuthorizedAddress' | 'authorities' | 'getAssetProxy' | 'removeAuthorizedAddress' | 'owner' | 'removeAuthorizedAddressAtIndex' | 'getProxyId' | 'authorized' | 'registerAssetProxy' | 'getAuthorizedAddresses' | 'transferOwnership'): FunctionFragment;
    encodeFunctionData(functionFragment: 'assetProxies', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'addAuthorizedAddress', values: [string]): string;
    encodeFunctionData(functionFragment: 'authorities', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getAssetProxy', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'removeAuthorizedAddress', values: [string]): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'removeAuthorizedAddressAtIndex', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getProxyId', values?: undefined): string;
    encodeFunctionData(functionFragment: 'authorized', values: [string]): string;
    encodeFunctionData(functionFragment: 'registerAssetProxy', values: [string]): string;
    encodeFunctionData(functionFragment: 'getAuthorizedAddresses', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
    decodeFunctionResult(functionFragment: 'assetProxies', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'addAuthorizedAddress', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'authorities', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAssetProxy', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'removeAuthorizedAddress', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'removeAuthorizedAddressAtIndex', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getProxyId', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'authorized', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'registerAssetProxy', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAuthorizedAddresses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    events: {
        'AuthorizedAddressAdded(address,address)': EventFragment;
        'AuthorizedAddressRemoved(address,address)': EventFragment;
        'AssetProxyRegistered(bytes4,address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'AuthorizedAddressAdded'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'AuthorizedAddressRemoved'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'AssetProxyRegistered'): EventFragment;
}
export interface AuthorizedAddressAddedEventObject {
    target: string;
    caller: string;
}
export declare type AuthorizedAddressAddedEvent = TypedEvent<[string, string], AuthorizedAddressAddedEventObject>;
export declare type AuthorizedAddressAddedEventFilter = TypedEventFilter<AuthorizedAddressAddedEvent>;
export interface AuthorizedAddressRemovedEventObject {
    target: string;
    caller: string;
}
export declare type AuthorizedAddressRemovedEvent = TypedEvent<[string, string], AuthorizedAddressRemovedEventObject>;
export declare type AuthorizedAddressRemovedEventFilter = TypedEventFilter<AuthorizedAddressRemovedEvent>;
export interface AssetProxyRegisteredEventObject {
    id: string;
    assetProxy: string;
}
export declare type AssetProxyRegisteredEvent = TypedEvent<[string, string], AssetProxyRegisteredEventObject>;
export declare type AssetProxyRegisteredEventFilter = TypedEventFilter<AssetProxyRegisteredEvent>;
export interface MultiAssetProxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MultiAssetProxyInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        assetProxies(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        addAuthorizedAddress(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        authorities(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        removeAuthorizedAddress(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        removeAuthorizedAddressAtIndex(target: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getProxyId(overrides?: CallOverrides): Promise<[string]>;
        authorized(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        registerAssetProxy(assetProxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAuthorizedAddresses(overrides?: CallOverrides): Promise<[string[]]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    assetProxies(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    addAuthorizedAddress(target: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    authorities(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<string>;
    removeAuthorizedAddress(target: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    removeAuthorizedAddressAtIndex(target: string, index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getProxyId(overrides?: CallOverrides): Promise<string>;
    authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    registerAssetProxy(assetProxy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAuthorizedAddresses(overrides?: CallOverrides): Promise<string[]>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        assetProxies(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        addAuthorizedAddress(target: string, overrides?: CallOverrides): Promise<void>;
        authorities(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<string>;
        removeAuthorizedAddress(target: string, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        removeAuthorizedAddressAtIndex(target: string, index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getProxyId(overrides?: CallOverrides): Promise<string>;
        authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        registerAssetProxy(assetProxy: string, overrides?: CallOverrides): Promise<void>;
        getAuthorizedAddresses(overrides?: CallOverrides): Promise<string[]>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'AuthorizedAddressAdded(address,address)'(target?: string | null, caller?: string | null): AuthorizedAddressAddedEventFilter;
        AuthorizedAddressAdded(target?: string | null, caller?: string | null): AuthorizedAddressAddedEventFilter;
        'AuthorizedAddressRemoved(address,address)'(target?: string | null, caller?: string | null): AuthorizedAddressRemovedEventFilter;
        AuthorizedAddressRemoved(target?: string | null, caller?: string | null): AuthorizedAddressRemovedEventFilter;
        'AssetProxyRegistered(bytes4,address)'(id?: null, assetProxy?: null): AssetProxyRegisteredEventFilter;
        AssetProxyRegistered(id?: null, assetProxy?: null): AssetProxyRegisteredEventFilter;
    };
    estimateGas: {
        assetProxies(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorizedAddress(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        authorities(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorizedAddress(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorizedAddressAtIndex(target: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getProxyId(overrides?: CallOverrides): Promise<BigNumber>;
        authorized(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        registerAssetProxy(assetProxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAuthorizedAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        assetProxies(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorizedAddress(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        authorities(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetProxy(assetProxyId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorizedAddress(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorizedAddressAtIndex(target: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getProxyId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        authorized(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAssetProxy(assetProxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAuthorizedAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
