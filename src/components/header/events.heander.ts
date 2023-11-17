export function handleHypeMouseOver(): void {
    const badgeDiscord: Element | null = document.querySelector(".hyper");
    badgeDiscord?.classList.remove("hidden");
    badgeDiscord?.classList.add("flex");
}

export function handleHypeMouseOut(): void {
    const badgeDiscord: Element | null = document.querySelector(".hyper");
    badgeDiscord?.classList.remove("flex");
    badgeDiscord?.classList.add("hidden");
    /*const listClassTag: DOMTokenList | undefined = badgeDiscord?.classList;
    if(Array.from(listClassTag || []).includes("flex")) {
        badgeDiscord?.classList.remove("hidden");
        badgeDiscord?.classList.add("flex");
    } else {
        
    }*/
}

export function handleNitroMouseOver(): void {
    const badgeDiscord: Element | null = document.querySelector(".nitro");
    badgeDiscord?.classList.remove("hidden");
    badgeDiscord?.classList.add("flex");
}

export function handleNitroMouseOut(): void {
    const badgeDiscord: Element | null = document.querySelector(".nitro");
    badgeDiscord?.classList.remove("flex");
    badgeDiscord?.classList.add("hidden");
    /*const listClassTag: DOMTokenList | undefined = badgeDiscord?.classList;
    if(Array.from(listClassTag || []).includes("flex")) {
        badgeDiscord?.classList.remove("hidden");
        badgeDiscord?.classList.add("flex");
    } else {
        
    }*/
}

export function handleBoosterMouseOver(): void {
    const badgeDiscord: Element | null = document.querySelector(".booster");
    badgeDiscord?.classList.remove("hidden");
    badgeDiscord?.classList.add("flex");
}

export function handleBoosterMouseOut(): void {
    const badgeDiscord: Element | null = document.querySelector(".booster");
    badgeDiscord?.classList.remove("flex");
    badgeDiscord?.classList.add("hidden");
    /*const listClassTag: DOMTokenList | undefined = badgeDiscord?.classList;
    if(Array.from(listClassTag || []).includes("flex")) {
        badgeDiscord?.classList.remove("hidden");
        badgeDiscord?.classList.add("flex");
    } else {
        
    }*/
}

export function handleDeveloperMouseOver(): void {
    const badgeDiscord: Element | null = document.querySelector(".developer");
    badgeDiscord?.classList.remove("hidden");
    badgeDiscord?.classList.add("flex");
}

export function handleDeveloperMouseOut(): void {
    const badgeDiscord: Element | null = document.querySelector(".developer");
    badgeDiscord?.classList.remove("flex");
    badgeDiscord?.classList.add("hidden");
}

export function handleEarlyMouseOver(): void {
    const badgeDiscord: Element | null = document.querySelector(".early");
    badgeDiscord?.classList.remove("hidden");
    badgeDiscord?.classList.add("flex");
}

export function handleEarlyMouseOut(): void {
    const badgeDiscord: Element | null = document.querySelector(".early");
    badgeDiscord?.classList.remove("flex");
    badgeDiscord?.classList.add("hidden");
}