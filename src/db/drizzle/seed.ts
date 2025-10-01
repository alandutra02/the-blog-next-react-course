import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
    const jsonPostRepository = new JsonPostRepository()
  const posts = await jsonPostRepository.findAll()

  try {
    await drizzleDb.delete(postsTable) // limpa a tabela antes de inserir novos dados
    await drizzleDb.insert(postsTable).values(posts)

    console.log()
    console.log(`${posts.length} pots foram salvos na base de dados!`);
    console.log()

    } catch (e) {
        console.log()
        console.log('Ocorreu um erro...');
        console.log()
        console.log(e);
        console.log()
    }
})();
