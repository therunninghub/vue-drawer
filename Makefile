clean:
	rm -rf dist
	rm -rf docs

lint:
	npm run lint

lint-fix:
	npm run lint --fix

test:
	npm run test:unit

coverage:
	npm run cover

build-lib:
	npm run build:lib

build-docs:
	npm run build:docs

build: build-lib build-docs

dev:
	npm run serve

bundle: clean lint-fix test build coverage

release:
	yarn version

publish-dry-run:
	npm publish --access=public --dry-run

publish:
	npm publish --access=public
