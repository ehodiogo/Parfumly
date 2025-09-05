from django.db import models

class Avaliacao(models.Model):
    usuario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE, related_name='avaliacoes')
    perfume = models.ForeignKey('perfumes.Perfume', on_delete=models.CASCADE, related_name='avaliacoes')
    nota = models.IntegerField(default=0)  # 0 a 5
    comentario = models.TextField(blank=True, null=True)
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('usuario', 'perfume')