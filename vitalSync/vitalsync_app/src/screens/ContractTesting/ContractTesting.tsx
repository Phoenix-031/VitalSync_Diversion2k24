import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  ThirdwebProvider,
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button,
} from '@thirdweb-dev/react-native';

import {CONTRACT_ADDRESS, TEST_ADDRESS} from '@env';

const ContractTesting = () => {
  return (
    <View style={contracttesting.contractcontainer}>
      <Text>Contract Testing</Text>
      <Web3Button
        contractAddress={CONTRACT_ADDRESS}
        action={contract => contract.call('checkRole', [TEST_ADDRESS])}
        onSuccess={() => console.log('completed')}>
        Send Transaction
      </Web3Button>
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
