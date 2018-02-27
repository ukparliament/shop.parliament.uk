deploy:
	cp config-sample.yml config.yml
	./node_modules/.bin/slate deploy
