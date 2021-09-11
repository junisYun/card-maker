import { getDatabase, ref, set, remove, onValue } from 'firebase/database';

class CardRepository {
  syncCards(userId, onUpdate) {
    const database = getDatabase();
    const dir = ref(database, `${userId}/cards`);
    onValue(dir, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
  }
  saveCard(userId, card) {
    const database = getDatabase();
    set(ref(database, `${userId}/cards/${card.id}`), card);
  }
  removeCard(userId, card) {
    const database = getDatabase();
    remove(ref(database, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
