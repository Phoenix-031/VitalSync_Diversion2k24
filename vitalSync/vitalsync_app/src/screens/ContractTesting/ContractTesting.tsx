import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {
  isPossibleEVMAddress,
  ThirdwebProvider,
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button,
} from '@thirdweb-dev/react-native';

import contractAbi from '../../contract/abi.json';

import {CONTRACT_ADDRESS, TEST_ADDRESS} from '@env';

const ContractTesting = () => {
  //   useEffect(() => {
  //     console.log('contractAbi', contract?.abi);
  //   }, [contract]);

  const {contract} = useContract(
    '0x709aff9b48349a118ececda069343877992f1c0b',
    contractAbi.abi,
  );
  //   console.log(contract?.abi);

  //   const {data, isLoading, error} = useContractRead(contract, 'checkUser', [
  //     '0x6455914457c2da0cb124375b79be997f70b8970e',
  //   ]);

  // if (isLoading) {
  //   console.log('loading');
  // } else if (error) {
  //   console.log('error', error);
  // } else {
  //   console.log('data', data);
  // }

  const {mutateAsync, isLoading, error} = useContractWrite(
    contract,
    'userRegister',
  );

  //   mutateAsync({
  //     args: [0x6455914457c2da0cb124375b79be997f70b8970e, 1234],
  //   });

  return (
    <View style={contracttesting.contractcontainer}>
      <Text>Contract Testing</Text>
      {/* <Web3Button
        contractAddress={CONTRACT_ADDRESS}
        // Calls the "setName" function on your smart contract with "My Name" as the first argument
        action={() =>

        }>
        Send Transaction
      </Web3Button> */}
    </View>
  );
};

export default ContractTesting;

const contracttesting = StyleSheet.create({
  contractcontainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    gap: 12,
  },
});
