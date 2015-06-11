System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    }
});
System.paths = {
    "main": "main.ts",
    "tooltip": "tooltip.ts",
    "mycomponent": "mycomponent.ts",
    "github.service": "github.service.ts"
};
