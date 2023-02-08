---
title: Typography example page
date: 2022/02/08
tags:
    - example
---

## Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Links

[Dreen](https://dreen.zihan.ga/)

[<svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><title>Zihan Chen</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
</mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#37ab98"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 7) rotate(97 18 18) scale(1.1)" fill="#a6c88c" rx="6"></rect><g transform="translate(3.5 3.5) rotate(-7 18 18)"><path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
</g>
</g>
</svg>](https://dreen.zihan.ga)

## Paragraph

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, dui at interdum facilisis, diam ipsum suscipit nisi, ut viverra justo sapien a odio. Etiam hendrerit elit libero, rhoncus lacinia nisl blandit at. Aenean mollis mauris eget enim maximus pellentesque. Sed auctor dignissim ornare. Vestibulum id mauris sit amet ipsum congue tincidunt sit amet sit amet mi. Cras vel mattis nisi. Suspendisse eu purus sed sapien euismod luctus. Quisque iaculis arcu purus, a aliquet odio dictum eget. Sed viverra, magna eget placerat euismod, neque augue dictum neque, id dignissim mi justo in sapien. Cras urna leo, gravida in semper non, placerat non odio. Aenean dapibus, nibh sed suscipit suscipit, nibh ante posuere ex, a convallis ante leo id augue. Maecenas erat ante, gravida tristique varius eget, porttitor a nunc.

Vivamus sed viverra arcu, in eleifend nibh. Ut rutrum sed eros id ullamcorper. Maecenas consequat dapibus magna, eu pulvinar nisi lacinia vel. Nulla non lobortis erat, non laoreet nunc. Proin mollis neque vel dignissim pretium. Etiam accumsan auctor dolor vitae gravida. Nunc vehicula nisl vel auctor porttitor.

Vestibulum et scelerisque tellus. Nullam ultrices mi ut convallis tempor. Nulla maximus metus quis ultricies pretium. Praesent posuere pellentesque enim id cursus. Mauris volutpat tellus dictum nibh tempus, ut condimentum orci congue. Praesent eget lacus aliquet, fermentum nisl sit amet, finibus nisi. Pellentesque lorem magna, sodales et fringilla et, porttitor ac sapien. Vestibulum eget risus a diam pellentesque convallis. Phasellus sed magna nec est hendrerit tristique at eu lectus. Donec vitae augue eget neque eleifend fermentum. Maecenas pulvinar leo vitae faucibus bibendum. Nullam iaculis accumsan nulla sed luctus. Nunc pretium bibendum tristique. Morbi eu massa molestie, luctus lacus sit amet, dignissim massa.

**Bold Sentences are being emphasized.**

_This sentence is italic_

~~Ugly web pages~~

<ins>This is underlined</ins>

> > Next.js is the best framework in the world!
>
> Astro is the best for static sites!

Sub: H<sub>2</sub>O

Sup: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

This is an inline code: `publicProcedure.input(z.object({}))`

## Lists

-   Elegant
-   Graceful
-   Beautiful

1. TypeScript
2. Rust
3. Go
4. Python
5. C++

-   [ ] Finish Dreen design
-   [x] Watch [@t3dotgg](https://www.youtube.com/@t3dotgg)'s new video
-   [x] Check HN

## Code

This is an example of the code blocks in Dreen.

```ts
export type Key = string | symbol

export type Matchers<T = any, R = any> =
	| {
			[K in ZitemType<Zitem<T>>]: T[K] extends null
				? (data?: T[K]) => R
				: T[K] extends undefined
				? () => R
				: (data: T[K]) => R
	  }
	| ({
			[K in ZitemType<Zitem<T>>]?: T[K] extends null
				? (data?: T[K]) => R
				: T[K] extends undefined
				? () => R
				: (data: T[K]) => R
	  } & {
			_: (data: T[ZitemType<Zitem<T>>]) => R
	  })

export type Zitem<T = any, K extends ZitemType<Zitem<T>> = keyof T> = [K, T[K]]
export type ZitemType<I extends Zitem = Zitem> = I[0]
export type ZitemData<I extends Zitem = Zitem> = I[1]

export class Zenum<T extends Record<Key, any>> {
	data<I extends ZitemType<Zitem<T>>>(item: Zitem<T, I>) {
		return item[1]
	}

	type<K extends ZitemType<Zitem<T>>>(item: Zitem<T, K>) {
		return item[0]
	}

	match<R, K extends ZitemType<Zitem<T>>>(
		item: Zitem<T, K>,
		matchers: Matchers<T, R>
	): R {
		return (
			matchers[this.type(item)] ||
			matchers._ ||
			((data) => {
				throw new Error(`No matchers found!`)
			})
		)(this.data(item))
	}

	run<R, K extends ZitemType<Zitem<T>>>(
		item: Zitem<T, K>,
		matchers: Partial<Matchers<T, R>>
	): R {
		return this.match(item, matchers as Matchers<T, R>)
	}

	item<K extends ZitemType<Zitem<T>>>(k: K, data: T[K]): Zitem<T, K> {
		return [k, data]
	}

	semantic<K extends ZitemType<Zitem<T>>>(item: Zitem<T, K>) {
		return {
			type: this.type(item),
			data: this.data(item),
		}
	}

	is<K extends ZitemType<Zitem<T>>, I extends Zitem<T>>(key: K, item: I) {
		return key === this.type(item)
	}

	Item: Zitem<T>
}

export type ZitemCreationSugur<T> = {
	[K in ZitemType<Zitem<T>>]: T[K] extends null
		? (data?: ZitemData<Zitem<T, K>>) => Zitem<T, K>
		: T[K] extends undefined
		? () => Zitem<T, K>
		: (data: ZitemData<Zitem<T, K>>) => Zitem<T, K>
}

export type ZenumFactory<T = any> = {
	data<I extends keyof T>(item: Zitem<T, I>): T[I]
	type<K extends keyof T>(item: Zitem<T, K>): K
	match<R, K extends keyof T>(item: Zitem<T, K>, matchers: Matchers<T, R>): R
	run<R, K extends keyof T>(
		item: Zitem<T, K>,
		matchers: Partial<Matchers<T, R>>
	): R
	item<K extends keyof T>(k: K, data: T[K]): Zitem<T, K>
	semantic<K extends keyof T>(
		item: Zitem<T, K>
	): {
		type: K
		data: T[K]
	}
	is<K extends keyof T, I extends Zitem<T, keyof T>>(
		key: K,
		item: I
	): ZitemType<I> extends K ? true : boolean
	Item: Zitem<T, keyof T>
} & ZitemCreationSugur<T>

export function zenum<T>(): ZenumFactory<T> {
	const zenum = new Zenum<T>()
	const proxy = new Proxy(zenum, {
		get(target, p, receiver) {
			return (
				target[p] ??
				((data: T[ZitemType<Zitem<T>>]) => target.item(p as any, data))
			)
		},
	}) as ZenumFactory<T>

	return proxy
}
```
