---
title: "Phoenix Channels"
cover: "https://unsplash.it/1280/500/?random?BoldMage"
author: "david"
date: "03/06/2018"
category: "tech"
tags:
    - programming
    - react
    - elixir
    - phoenix
    - channels
---

## Implementing a channel in a Phoenix React project.

I've been wanting to mess around with phoenix channels and when I recently decided to update hearthstone to track any exported user deck it seemed like a great use case to implement them with.

## Server Side

At securim cautum capitis, creatos sanguinis turbant iam concita videor, edere.
Alis genas rudis felix quas **longum** suorum manu ante prima **usque**. Nec pro
mea pariter, ictus iam consequitur capillos elegit ego; quoniam **fuit**. Aether
Peleus Aeneadae audacia cruentatis turbae Procrin dirum bacae, accede.

```elixir
defmodule HearthdecksWeb.DeckSocket do
  use Phoenix.Socket

  ## Channels
  channel("room", HearthdecksWeb.DeckChannel)

  ## Transports
  transport(:websocket, Phoenix.Transports.WebSocket)

  def connect(_params, socket) do
    {:ok, socket}
  end

  def id(_socket), do: nil
end
```

```elixir
defmodule HearthdecksWeb.DeckChannel do
  use HearthdecksWeb, :channel
  alias Hearthdecks.Data

  def join("room", _params, socket) do
    {:ok, socket}
  end

  def handle_in("create_deck", deckstring, socket) do
    Data.create_deck(%{deckstring: deckstring})
    {:noreply, socket}
  end
end
```

## Client Side

```js
import { Socket } from "phoenix"

let socket = new Socket("/socket")
socket.connect()

export default socket
```

```js
// import the socket.
import socket from "../../socket.js"


export default class ExportDeck extends React.Component {
... a bunch of other normal component stuff.


// run a function that joins the phoenix channel after the component mounts.
componentDidMount() {
    this.setPhoenixChannel()
}

// create a function that joins the channel and set the channel in the components state.
setPhoenixChannel() {
    let channel = socket.channel("room", {})
    this.setState({ channel: channel })

    channel.join()
}

// whenever a user generates a deckstring we push it to the channel along with the "create_deck" message.
generateDeckString() {
    ...other deckstring creation stuff.

    this.state.channel
    .push("create_deck", deckstring)
    .receive("ok", resp => {}))
}

}
```

## Connecting the Dots

Multis timidus hic si auctor hausit. Suos taedasque, malis est nitente sceleri
sunt florem.

Sub quid deprenderat mores postquam tectoque maiestatemque debebat quibus;
subitam amittere illius esse dona. Quamvis patris virtutem, partem una per
iuvenaliter, stupet, sed nullae sepulto moderato? Nec phaedimus aequoris dixit.
Hic bis parenti: e petunt satis.
