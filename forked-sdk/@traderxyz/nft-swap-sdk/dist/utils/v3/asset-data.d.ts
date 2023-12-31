import { BigNumberish } from '@ethersproject/bignumber';
import { ERC1155AssetDataSerialized, ERC20AssetDataSerialized, ERC721AssetDataSerialized, SerializedAvailableAssetDataTypesDecoded, SerializedSingleAssetDataTypes, SwappableAsset, UserFacingSerializedSingleAssetDataTypes } from '../../sdk/v3/types';
import { InterallySupportedAssetFormat } from '../../sdk/v3/pure';
export declare const encodeErc20AssetData: (tokenAddress: string) => string;
export declare const decodeErc20AssetData: (encodedAssetData: string) => ERC20AssetDataSerialized;
export declare const encodeErc721AssetData: (tokenAddress: string, tokenId: BigNumberish) => string;
export declare const decodeErc721AssetData: (encodedAssetData: string) => ERC721AssetDataSerialized;
export declare const encodeErc1155AssetData: (tokenAddress: string, tokenIds: BigNumberish[], values: BigNumberish[], callbackData: string) => string;
export declare const decodeErc1155AssetData: (encodedAssetData: string) => ERC1155AssetDataSerialized;
export declare const encodeMultiAssetAssetData: (values: BigNumberish[], nestedAssetData: string[]) => string;
export declare const decodeMultiAssetData: (encodedAssetData: string) => {
    assetProxyId: string;
    amounts: string[];
    nestedAssetData: SerializedSingleAssetDataTypes[];
};
export declare const encodeAssetData: (assetData: UserFacingSerializedSingleAssetDataTypes, erc1155EncodingForMultiAssetOrder?: boolean) => string;
export declare const decodeAssetData: (encodedAssetData: string) => SerializedAvailableAssetDataTypesDecoded;
export declare const getAmountFromAsset: (assetData: UserFacingSerializedSingleAssetDataTypes) => string;
export declare const convertAssetToInternalFormat: (swappable: SwappableAsset) => InterallySupportedAssetFormat;
export declare const convertAssetsToInternalFormat: (assets: Array<SwappableAsset>) => Array<InterallySupportedAssetFormat>;
