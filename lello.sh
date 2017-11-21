#!/usr/bin/env bash
#
# @@script: lello.sh
# @@description: bootstrapper
# @@author: Loouis Low <loouis@gmail.com>
# @@copyright: Loouis Low <loouis@gmail.com>
#

######## vars ##########

# ansi
blue='\e[94m'
nc='\033[0m'
bold=$(tput bold)
normal=$(tput sgr0)
title="${blue}[lello]${nc}"

######## functions ##########

function runas_root() {
  # check if sudo
  if [ "$(whoami &2> /dev/null)" != "root" ] &&
     [ "$(id -un &2> /dev/null)" != "root" ]
    then
      echo -e "$title permission denied"
      exit 1
  fi
}

function prerequisites() {
  if ! [ -x "$(command -v nodejs)" ];
  then
    echo -e "$title ${bold}installing nodejs...${normal}" >&2
    runas_root
    curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
    apt install -y nodejs
  fi
}

function die() {
  echo -e $*
  exit 1
}

function run_server() {
  echo -e "$title preparing server..."
  npm start || die "$title ${red}[warn]${normal} serve has stopped."
}

######## init ##########

binary=$(basename $0)

echo -e "$title ${bold}Usage:${normal} $binary --help"

while test "$#" -gt 0;
  do
    case "$1" in

      -h|--help)
      shift
        echo
        echo -e "${bold}Usage:${normal}"
        echo
        echo e- " -h, --help          Display this information"
        echo e- " -r- --run           Run Lello"
        echo
        exit 1
      shift;;

      -r|--run)
      shift
        prerequisites
        run_server
      shift;;

      *) break;;

  esac
done