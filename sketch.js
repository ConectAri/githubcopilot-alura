//jogo Arcade Pong curso Alura

class Raquete {
  constructor(x) {
    this.x = 10;
    this.y = height / 2;
    this.w = 10;
    this.h = 60;
   
  }

  update() {
    // se a raquete é o jogador
    if (this.x < width / 2) {
      this.y = mouseY;
    } else {
      // se a bola está em cima vai pra cima
      if (bola.y < this.y) {
        this.y -= 5;
      } else {
        // se a bola está em baixo vai pra baixo
        this.y += 5;
      }
    }

    //limitar dentro da tela
    if (this.y < this.h / 2) {
      this.y = this.h / 2;
      console.log("Raquete: ", this.y);
    }
    if (this.y > height - this.h / 2) {
      this.y = height - this.h / 2;
      console.log("Raquete: ", this.y);
    }
  }

  desenha() {
    fill(color(255, 255, 255));
    rect(this.x, this.y, this.w, this.h);
    console.log("Raquete: ", this.x, this.y, this.w, this.h);
  }
}

class Bola {
  constructor() {
    this.r = 25;
    this.reset();
           
      this.x = width / 2;
      this.y = height / 2;
      const velocidadeMaxima = 5;
      this.vx = Math.random() * velocidadeMaxima * 2 - 2.5;
      this.vy = Math.random() * velocidadeMaxima * 2 - velocidadeMaxima;
    }
}

    reset(); {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < this.r || this.x > width - this.r) {
        this.reset();
      }
      if (this.y < this.r || this.y > height - this.r) {
        this.vy *= -1;
      }
      // se colisão com o jogador
      if (this.x < 40 && this.y > jogador.y && this.y < jogador.y + jogador.h) {
        jogador = new Raquete(100);
        this.vx *= -1;

        // se colide com o computador
        const colideNoXComputador =
          this.x + this.r > computador.x &&
          this.x + this.r < computador.x + computador.w;

        // se colisão com o jogador considerando o raio da bola
        const colideNoXJogador =
          this.x - this.r > jogador.x &&
          this.x - this.r < jogador.x + jogador.w;

        // se colide no X
        const colideNoX = colideNoXComputador || colideNoXJogador;

        const colideNoY =
          this.y + this.r >= jogador.y &&
          this.y - this.r <= jogador.y + jogador.h;
        if (colideNoX && colideNoY) {
          this.vx *= -1;
          this.vx *= 1.1;
          this.vy *= 1.1;
        }
      }

      desenha();
      {
        fill(color(255, 0, 0));
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
      }
    }


    // Inicia o jogo, cria uma bola e duas raquetes (jogador e computador)
    function setup() {
      createCanvas(800, 400);
      bola = new Bola();
      jogador = new Raquete(30);
      computador = new Raquete(width - 30 - 10);
    }

    function draw() {
      background(color(0, 0, 0));
      bola.update();
      bola.desenha();
      jogador.update();
      jogador.desenha();
      computador.update();
      computador.desenha();
    }

 
