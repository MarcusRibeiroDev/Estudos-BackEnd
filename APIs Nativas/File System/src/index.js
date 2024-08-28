import { promises as fs } from "fs";

console.log("File System está ON");

const htmlExample = `
<!DOCTYPE html>
  <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Olá Mundo</title>
    </head>
    <body>
        <h1>Olá Terra!</h1>
    </body>
</html>
`;

class FunctionsFS {
  // Arquivo

  // Criar arquivo
  createFileExample(path, content) {
    fs.writeFile(`./src/${path}`, content)
      .then(() => {
        console.log("Sucesso ao criar txt");
      })
      .catch(() => {
        console.log("Fracasso ao criar txt");
      });
  }

  // Adicionar no final do arquivo
  appendFileExample() {
    fs.appendFile("./src/tests/test.html", htmlExample)
      .then(() => {
        console.log("Sucesso ao criar html");
      })
      .catch(() => {
        console.log("Fracasso ao criar html");
      });
  }

  // Ler arquivo
  async readFileExample(res) {
    try {
      const data = await fs.readFile("./src/tests/test.html", {
        encoding: "utf8",
      });
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  }

  // Subscrever todo arquivo
  async writeFileExample(path, content) {
    try {
      await fs.writeFile(`./src/${path}`, content);
      console.log("Arquivo escrito com sucesso!");
    } catch (error) {
      console.error("Erro ao escrever no arquivo:", error);
    }
  }

  // Deletar arquivo
  async deleteFileExample(path) {
    try {
      await fs.unlink(`./src/${path}`);
      console.log("Arquivo removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover o arquivo:", error);
    }
  }

  // Diretório

  // Criar diretório
  async createDirectoryExample(path) {
    try {
      await fs.mkdir(`./src/${path}`);
      console.log("Diretório criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar o diretório:", error);
    }
  }

  // Ler informações dentro do diretório
  async readDirectoryExample(path) {
    try {
      const files = await fs.readdir(`./src/${path}`);
      console.log(files);
    } catch (error) {
      console.error("Erro ao ler o diretório:", error);
    }
  }

  // Deletar diretório
  async removeDirectoryExample(path) {
    try {
      await fs.rmdir(`./src/${path}`);
      console.log("Diretório removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover o diretório:", error);
    }
  }

  // Arquivo ou diretório

  // Ver status
  async statExample(path) {
    try {
      const stats = await fs.stat(`./src/${path}`);
      console.log(stats);
    } catch (error) {
      console.error("Erro ao obter informações:", error);
    }
  }

  // Renomear
  async renameExample(oldPath, newPath) {
    try {
      await fs.rename(`./src/${oldPath}`, `./src/${newPath}`);
      console.log("Arquivo renomeado com sucesso!");
    } catch (error) {
      console.error("Erro ao renomear o arquivo:", error);
    }
  }
}

export const myFS = new FunctionsFS();
