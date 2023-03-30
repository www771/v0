import styles from './index.module.scss';
import Collapsible from './Item';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

const FaqPage = () => {
  return (
    <div className="page">
      <div className={styles.header}>
        <h1>FAQ</h1>
      </div>
      <div className={styles.list}>
        <Collapsible title={<FormattedMessage id="faq_a1" />}>
          You can withdraw BTC, ETH, USDT(ERC20), XMR, TON to any external cryptocurrency wallet.
          For more details, refer to our guide.
        </Collapsible>
        <Collapsible title="Can i take my initial BUSD back?">
          Yes, you can claim your BUSD back after 28 days.
        </Collapsible>
        <Collapsible title="Are there any fees?">
          Yes, you must to pay 3% fee on deposit and withdraw.
        </Collapsible>
        <Collapsible title="How can i withdraw my reward?">
          At any time, you can click the GET REWARD button and your BUSD will be credited to you.
        </Collapsible>
        <Collapsible title="How can I send cryptocurrency? How to withdraw?">
          To transfer funds from your P2Dex wallet to another wallet, go to the Wallet menu and
          press the Send button, then enter Address and Amount, set the network fee and confirm the
          withdrawal.
        </Collapsible>
        <Collapsible title="How can I exchange crypto for fiat?">
          To exchange cryptocurrency and receive fiat using your payment details, you should first
          sell your coins. To do that, go to the Dashboard/Sell and shop around for a suitable buy
          offer.
        </Collapsible>
        <Collapsible title="Where can I see my wallet address?">
          Go to the Wallet menu and select Receive. A new wallet address will be generated on the
          Wallet page.
        </Collapsible>

        <Collapsible title="Sending to an incorrect address">
          Our service won’t allow you to use invalid Bitcoin addresses. If cryptocurrency has been
          sent, it means that the address you provided was correct. Unfortunately, transfers to
          wrong addresses cannot be reversed.
        </Collapsible>

        <Collapsible title="How can I cancel a submitted transaction?">
          Once a transaction has been sent to the network, you can’t cancel it. All transactions in
          the network are irreversible.
        </Collapsible>

        <Collapsible title="What is transaction hash?">
          Transaction hash (txid) is a unique identifier that allows to track a given transaction on
          the blockchain.
        </Collapsible>

        <Collapsible title="Where can I find transaction hash?">
          Go to Transaction history under the Wallet drop-down menu, find the relevant transaction
          and click on it. Transaction details with related information will be shown.
        </Collapsible>

        <Collapsible title="Transaction processing">
          Transactions with minimum network fee get into the mempool within 5-15 minutes. After the
          transaction has been sent to the network, its hash (txid) will be available in the
          transaction history. Rarely (when the mempool becomes backlogged with unconfirmed
          transactions), the transaction may get queued briefly for batch processing in order to
          increase the total fee and facilitate faster confirmations. To send the transaction
          immediately, increase the network fee above the minimum amount.
        </Collapsible>
      </div>
    </div>
  );
};

export default FaqPage;
