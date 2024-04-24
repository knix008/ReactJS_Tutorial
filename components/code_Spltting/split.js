// After code-splitting
import("./math.js").then(math => {
    console.log(math.sub(23, 14));
});
