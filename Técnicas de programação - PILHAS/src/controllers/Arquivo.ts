import fs from 'fs-extra';

const filename:string = "./src/controllers/dados.txt"

class Arquivo {
  async lerArquivo(): Promise<string[] | never> {
    try {
      const data = await fs.readFile(filename, 'utf-8');
      return data.split('\n');
    } catch (error) {
      throw new Error('Erro ao ler o arquivo');
    }
  }

  async escreverArquivo(nomes: string[]): Promise<void | never> {
    try {
      await fs.writeFile(filename, nomes.join('\n'));
    } catch (error) {
      throw new Error('Erro ao escrever no arquivo');
    }
  }
}

export default Arquivo;
