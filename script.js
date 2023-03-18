const initMultiIcon = () => {
    const RADIUS_DIFF = 60
    const INITIAL_RADIUS = 80
    const subIcons = document.querySelectorAll(".sub-icon")
    let rowNumber = 1
    let iconsInRow = rowNumber + 2
    let iconNumber = 0
    for (let i = 0; i < subIcons.length; i++) {
        if (iconNumber === iconsInRow) {
            rowNumber++
            iconsInRow++
            iconNumber = 0
        }
        iconNumber++

        subIcons[i].style.transform = `
        translateX(-${(INITIAL_RADIUS + (RADIUS_DIFF * (rowNumber - 1))) * Math.sin((90 / (iconsInRow - 1)) * (Math.PI / 180) * (iconNumber - 1))}px)
        translateY(-${(INITIAL_RADIUS + (RADIUS_DIFF * (rowNumber - 1))) * Math.cos((90 / (iconsInRow - 1)) * (Math.PI / 180) * (iconNumber - 1))}px)
        `
        subIcons[i].style.transition = `transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i / 10}s`
    }
}
initMultiIcon()