import { Component, JSX, createSignal } from "solid-js"
import "~/styles/home.sass"
import { Button } from "../ui/Button"
import { HomeParallaxPart1 } from "./home/HomeParallaxPart1"
import { ParallexPart2 } from "./home/ParallaxPart2"
import { Hoverable } from "../decorative/cursor/Cursor"
import { Dialog } from "../ui/Dialog"
import { AGE, EMAIL, EMAIL_URL, GITHUB_URL, TWITTER_URL } from "~/config"
import { FavouriteStacks } from "./home/FavouriteStacks"
import { BesidesThis } from "./home/BesidesThis"

export const IndexPage: Component = (props) => {
	const [workWithMeOpen, setWorkWithMeOpen] = createSignal(false)

	return (
		<>
			<div id="home-hero">
				<div id="first">
					<div>
						<h1 id="home-hero-text">
							An <span id="shine-text-1">wonderful</span>
							<br /> and <span id="shine-text-2">
								fantastic
							</span>{" "}
							Astro blog template.
						</h1>
						<p id="home-hero-desc">
							Zihan Blog is a blog template made by Zihan Chen
							with passion.
						</p>
						<div id="home-hero-actions">
							<Button
								id="work-with-me"
								onClick={() => setWorkWithMeOpen(true)}
							>
								Use the template
							</Button>
							<Button
								id="read-my-blog"
								onClick={() =>
									(window.location.href =
										"https://zihan.pages.dev")
								}
							>
								About Zihan
							</Button>
						</div>
					</div>
				</div>

				<FavouriteStacks />

				<BesidesThis />

				<div id="interested-about-me">
					Want to use this template?
					<br /> It's fully open source and you can use it for any
					reason in any way!
					<br /> The code of this template is at{" "}
					<Hoverable>
						<a
							target="_blank"
							href="https://github.com/zihan-ch/zihan-blog"
						>
							Github
						</a>
					</Hoverable>
					.
				</div>
			</div>
		</>
	)
}
