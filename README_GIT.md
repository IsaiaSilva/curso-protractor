1. Criar diretório no git
2. Efetuar clone do diretório na pasta do projeto
3. Criando uma nova branch
	git branch 'nome-da-branch'

	#listando suas branchs locais e remotas:
	git branch -a

3. Sair da master e ir para a nova branch criada anteriormente.
	git checkout 'nome-da-branch'
4. Verificando status
	git status
5. Verificando diferenças nos arquivos
	git diff
6. Adicionando arquivos
	git add . 				  -> Adiciona todos
	git add 'nomearquivo.txt' -> adiciona apenas 1 arquivo especifico nomeado.
7. Commitar os arquivos
	git commit -m 'Mensagem sugestiva de qual implementação foi realizada'
8. Subir arquivo para a branch
	git push origin 'nome-da-branch'

9. Mudar para a master
	git checkout master
10. Efetuar merge da branch para master
	git merge 'nome-da-branch'
11. Subir arquivo para a master
	git push origin master
	
12. Visualizar na URL do github se está tudo correto.
	
	
	
	
