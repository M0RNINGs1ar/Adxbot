{ pkgs }: {
    deps = [
      pkgs.haskellPackages.nix-output-monitor
      pkgs.zip
      pkgs.neko
        pkgs.haxe
    ];
}