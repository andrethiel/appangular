import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  imports: [],
  templateUrl: './camera.html',
  styles: ``,
})
export class CameraComponent {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  stream: MediaStream | null = null;
  photo: string | null = null; // Base64 da imagem capturada

  async openCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }, // câmera traseira
        audio: false,
      });

      const video = this.videoRef.nativeElement;
      video.srcObject = this.stream;
      await video.play();
    } catch (err) {
      console.error('Erro ao abrir câmera:', err);
    }
  }

  capturePhoto() {
    if (!this.stream) return;

    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context!.drawImage(video, 0, 0);

    this.photo = canvas.toDataURL('image/png'); // converte foto em base64
  }

  closeCamera() {
    this.stream?.getTracks().forEach((track) => track.stop());
    this.stream = null;
  }

  clearPhoto() {
    this.photo = null;
  }
}
