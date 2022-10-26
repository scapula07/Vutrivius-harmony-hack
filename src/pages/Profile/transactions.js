import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { AccountState } from '../../recoilstate/globalState'

export default function Transactions() {
  const account = useRecoilValue(AccountState)

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetch(`https://api.covalenthq.com/v1/1666700000/address/${account}/transactions_v2/?key=ckey_40ccf16cfbff468a8ea289c92df`)
        console.log('data', data)

      } catch (error) {
        console.error(error)
      }

    }
    getTransactions()
  }, [account])
  return (
    <div>transactions</div>
  )
}
