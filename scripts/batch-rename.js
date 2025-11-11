import fs from 'node:fs'

fs.readdir('.', doRename)

function doRename(err, fileList) {
    if (err) {
        console.error('doRename err: ', err)
        return
    }

    fileList.forEach(element => {
        if (/\.jpg/.test(element) && /^创业者如何/.test(element)) {
            const matches = /(\d+)\.jpg/.exec(element)
            if (!matches) {
                return
            }

            const n = matches[1]
            // 人工智能世代降临 (36).png
            const target = `huan-ai-talk-${n}.jpg`
            console.log(target)
            fs.rename(element, target, err2 => {
                if (err2) {
                    console.log('ERROR: ' + err2)
                    return
                }
                console.log('rename ', element, target)
            })
        }
    })
}
