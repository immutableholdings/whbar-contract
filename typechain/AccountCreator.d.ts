/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AccountCreatorInterface extends ethers.utils.Interface {
  functions: {
    "accountCreator()": FunctionFragment;
    "createAccount(string,string)": FunctionFragment;
    "createAccountFail(string,string)": FunctionFragment;
    "createAccountRefund(string)": FunctionFragment;
    "createAccountSuccess(string,string)": FunctionFragment;
    "getAccountCreationFee()": FunctionFragment;
    "getAccountCreator()": FunctionFragment;
    "setAccountCreationFee(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "accountCreator", values?: void): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccountFail",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccountRefund",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccountSuccess",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountCreationFee",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountCreator",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setAccountCreationFee",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccountFail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccountRefund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccountSuccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountCreationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAccountCreationFee",
    data: BytesLike
  ): Result;

  events: {
    "CreateAccountFail(string,address,string,uint256,string)": EventFragment;
    "CreateAccountRefund(string,address,uint256)": EventFragment;
    "CreateAccountRequest(string,address,string)": EventFragment;
    "CreateAccountSuccess(string,address,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateAccountFail"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateAccountRefund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateAccountRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateAccountSuccess"): EventFragment;
}

export class AccountCreator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AccountCreatorInterface;

  functions: {
    accountCreator(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    createAccount(
      operationId: string,
      hederaPublicKey: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    createAccountFail(
      operationId: string,
      reason: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createAccountRefund(
      operationId: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createAccountSuccess(
      operationId: string,
      hederaAccountId: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAccountCreationFee(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getAccountCreator(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setAccountCreationFee(
      feeInWei: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  accountCreator(overrides?: CallOverrides): Promise<string>;

  createAccount(
    operationId: string,
    hederaPublicKey: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  createAccountFail(
    operationId: string,
    reason: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createAccountRefund(
    operationId: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createAccountSuccess(
    operationId: string,
    hederaAccountId: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAccountCreationFee(overrides?: CallOverrides): Promise<BigNumber>;

  getAccountCreator(overrides?: CallOverrides): Promise<string>;

  setAccountCreationFee(
    feeInWei: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    accountCreator(overrides?: CallOverrides): Promise<string>;

    createAccount(
      operationId: string,
      hederaPublicKey: string,
      overrides?: PayableOverrides
    ): Promise<boolean>;

    createAccountFail(
      operationId: string,
      reason: string,
      overrides?: Overrides
    ): Promise<boolean>;

    createAccountRefund(
      operationId: string,
      overrides?: Overrides
    ): Promise<boolean>;

    createAccountSuccess(
      operationId: string,
      hederaAccountId: string,
      overrides?: Overrides
    ): Promise<boolean>;

    getAccountCreationFee(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountCreator(overrides?: CallOverrides): Promise<string>;

    setAccountCreationFee(
      feeInWei: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;
  };

  filters: {
    CreateAccountFail(
      operationId: null,
      requestor: null,
      hederaPublicKey: null,
      amount: null,
      reason: null
    ): EventFilter;

    CreateAccountRefund(
      id: null,
      requestor: null,
      refundAmountWei: null
    ): EventFilter;

    CreateAccountRequest(
      operationId: null,
      requestor: null,
      hederaPublicKey: null
    ): EventFilter;

    CreateAccountSuccess(
      operationId: null,
      requestor: null,
      hederaPublicKey: null,
      hederaAccountId: null
    ): EventFilter;
  };

  estimateGas: {
    accountCreator(): Promise<BigNumber>;
    createAccount(
      operationId: string,
      hederaPublicKey: string
    ): Promise<BigNumber>;
    createAccountFail(operationId: string, reason: string): Promise<BigNumber>;
    createAccountRefund(operationId: string): Promise<BigNumber>;
    createAccountSuccess(
      operationId: string,
      hederaAccountId: string
    ): Promise<BigNumber>;
    getAccountCreationFee(): Promise<BigNumber>;
    getAccountCreator(): Promise<BigNumber>;
    setAccountCreationFee(feeInWei: BigNumberish): Promise<BigNumber>;
  };

  populateTransaction: {
    accountCreator(): Promise<PopulatedTransaction>;
    createAccount(
      operationId: string,
      hederaPublicKey: string
    ): Promise<PopulatedTransaction>;
    createAccountFail(
      operationId: string,
      reason: string
    ): Promise<PopulatedTransaction>;
    createAccountRefund(operationId: string): Promise<PopulatedTransaction>;
    createAccountSuccess(
      operationId: string,
      hederaAccountId: string
    ): Promise<PopulatedTransaction>;
    getAccountCreationFee(): Promise<PopulatedTransaction>;
    getAccountCreator(): Promise<PopulatedTransaction>;
    setAccountCreationFee(
      feeInWei: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
