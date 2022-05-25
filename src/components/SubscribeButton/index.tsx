import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { stripe } from '../../services/stripe';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const  { data: session } = useSession();

  async async function handleSubscribe() {
    //Verifica se o usuário esta logado
    if (!session) {
      signIn('github')
      return;
    }
    // Criação da checkout session
    
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;

      const stripe = await getStripeJs()

    } catch {

    }
  }

  return(
    <button
    type='button'
    className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}